import fs from 'fs';
import path from 'path';

// File-based CMS for MVP
// This approach stores content in JSON files for easy editing

export interface CMSContent {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
  type: 'page' | 'news' | 'announcement';
  published: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  published: boolean;
  image?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  published: boolean;
}

const CMS_DIR = path.join(process.cwd(), 'data', 'cms');

// Ensure CMS directory exists
function ensureCMSDirectory() {
  if (!fs.existsSync(CMS_DIR)) {
    fs.mkdirSync(CMS_DIR, { recursive: true });
  }
}

// Get content by type and ID
export function getContent(type: string, id: string): CMSContent | null {
  try {
    ensureCMSDirectory();
    const filePath = path.join(CMS_DIR, `${type}-${id}.json`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error reading content:', error);
    return null;
  }
}

// Save content
export function saveContent(content: CMSContent): boolean {
  try {
    ensureCMSDirectory();
    const filePath = path.join(CMS_DIR, `${content.type}-${content.id}.json`);
    
    const contentToSave = {
      ...content,
      lastUpdated: new Date().toISOString()
    };
    
    fs.writeFileSync(filePath, JSON.stringify(contentToSave, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving content:', error);
    return false;
  }
}

// Get all content of a specific type
export function getAllContent(type: string): CMSContent[] {
  try {
    ensureCMSDirectory();
    const files = fs.readdirSync(CMS_DIR);
    const contentFiles = files.filter(file => file.startsWith(`${type}-`) && file.endsWith('.json'));
    
    const contents: CMSContent[] = [];
    
    for (const file of contentFiles) {
      const filePath = path.join(CMS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      contents.push(JSON.parse(content));
    }
    
    return contents.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
  } catch (error) {
    console.error('Error reading all content:', error);
    return [];
  }
}

// Get published content only
export function getPublishedContent(type: string): CMSContent[] {
  return getAllContent(type).filter(content => content.published);
}

// Delete content
export function deleteContent(type: string, id: string): boolean {
  try {
    const filePath = path.join(CMS_DIR, `${type}-${id}.json`);
    
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error deleting content:', error);
    return false;
  }
}

// Get news items
export function getNewsItems(): NewsItem[] {
  try {
    ensureCMSDirectory();
    const files = fs.readdirSync(CMS_DIR);
    const newsFiles = files.filter(file => file.startsWith('news-') && file.endsWith('.json'));
    
    const newsItems: NewsItem[] = [];
    
    for (const file of newsFiles) {
      const filePath = path.join(CMS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      newsItems.push(JSON.parse(content));
    }
    
    return newsItems
      .filter(item => item.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading news items:', error);
    return [];
  }
}

// Save news item
export function saveNewsItem(newsItem: NewsItem): boolean {
  try {
    ensureCMSDirectory();
    const filePath = path.join(CMS_DIR, `news-${newsItem.id}.json`);
    
    const contentToSave = {
      ...newsItem,
      lastUpdated: new Date().toISOString()
    };
    
    fs.writeFileSync(filePath, JSON.stringify(contentToSave, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving news item:', error);
    return false;
  }
}

// Get announcements
export function getAnnouncements(): Announcement[] {
  try {
    ensureCMSDirectory();
    const files = fs.readdirSync(CMS_DIR);
    const announcementFiles = files.filter(file => file.startsWith('announcement-') && file.endsWith('.json'));
    
    const announcements: Announcement[] = [];
    
    for (const file of announcementFiles) {
      const filePath = path.join(CMS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      announcements.push(JSON.parse(content));
    }
    
    return announcements
      .filter(announcement => announcement.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading announcements:', error);
    return [];
  }
}

// Save announcement
export function saveAnnouncement(announcement: Announcement): boolean {
  try {
    ensureCMSDirectory();
    const filePath = path.join(CMS_DIR, `announcement-${announcement.id}.json`);
    
    const contentToSave = {
      ...announcement,
      lastUpdated: new Date().toISOString()
    };
    
    fs.writeFileSync(filePath, JSON.stringify(contentToSave, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving announcement:', error);
    return false;
  }
}

// Generate unique ID
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}