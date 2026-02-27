import { supabase } from './supabase';

export interface ImageUploadOptions {
  file: File;
  folder: 'featured-images' | 'inline-images';
  slug: string;
  descriptor?: string;
}

export interface ImageUploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export async function uploadBlogImage({
  file,
  folder,
  slug,
  descriptor = 'image',
}: ImageUploadOptions): Promise<ImageUploadResult> {
  try {
    const fileExt = file.name.split('.').pop()?.toLowerCase();

    if (!fileExt || !['jpg', 'jpeg', 'png', 'webp'].includes(fileExt)) {
      return {
        success: false,
        error: 'Invalid file type. Use JPG, PNG, or WebP.',
      };
    }

    if (file.size > 5 * 1024 * 1024) {
      return {
        success: false,
        error: 'File too large. Maximum size is 5MB.',
      };
    }

    const fileName = `${slug}-${descriptor}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) {
      return {
        success: false,
        error: uploadError.message,
      };
    }

    const { data } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);

    return {
      success: true,
      url: data.publicUrl,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed',
    };
  }
}

export async function deleteBlogImage(url: string): Promise<boolean> {
  try {
    const urlParts = url.split('/blog-images/');
    if (urlParts.length !== 2) {
      return false;
    }

    const filePath = urlParts[1];

    const { error } = await supabase.storage
      .from('blog-images')
      .remove([filePath]);

    return !error;
  } catch {
    return false;
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60);
}

export function validateImageDimensions(
  file: File,
  type: 'featured' | 'inline'
): Promise<{ valid: boolean; message?: string }> {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);

      if (type === 'featured') {
        if (img.width === 1200 && img.height === 630) {
          resolve({ valid: true });
        } else {
          resolve({
            valid: false,
            message: `Featured images should be 1200x630px. This image is ${img.width}x${img.height}px.`,
          });
        }
      } else {
        if (img.width <= 1000) {
          resolve({ valid: true });
        } else {
          resolve({
            valid: false,
            message: `Inline images should be max 1000px wide. This image is ${img.width}px wide.`,
          });
        }
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({ valid: false, message: 'Failed to load image' });
    };

    img.src = url;
  });
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

export function getImageTypeRecommendation(type: 'featured' | 'inline'): string {
  if (type === 'featured') {
    return 'Recommended: 1200x630px, under 200KB, JPG or WebP format';
  }
  return 'Recommended: Max 1000px width, under 150KB, JPG or WebP format';
}
