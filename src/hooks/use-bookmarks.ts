import { useState, useCallback, useEffect } from "react";

export interface BookmarkItem {
  contentType: "campaign" | "topic" | "article";
  contentId: string;
  createdAt: string;
}

const STORAGE_KEY = "dhap-bookmarks";

function readBookmarks(): BookmarkItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeBookmarks(bookmarks: BookmarkItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  useEffect(() => {
    setBookmarks(readBookmarks());
  }, []);

  const isBookmarked = useCallback(
    (contentType: string, contentId: string) =>
      bookmarks.some((b) => b.contentType === contentType && b.contentId === contentId),
    [bookmarks],
  );

  const toggleBookmark = useCallback(
    (contentType: BookmarkItem["contentType"], contentId: string) => {
      setBookmarks((prev) => {
        const exists = prev.some((b) => b.contentType === contentType && b.contentId === contentId);
        const updated = exists
          ? prev.filter((b) => !(b.contentType === contentType && b.contentId === contentId))
          : [...prev, { contentType, contentId, createdAt: new Date().toISOString() }];
        writeBookmarks(updated);
        return updated;
      });
    },
    [],
  );

  const removeBookmark = useCallback(
    (contentType: string, contentId: string) => {
      setBookmarks((prev) => {
        const updated = prev.filter((b) => !(b.contentType === contentType && b.contentId === contentId));
        writeBookmarks(updated);
        return updated;
      });
    },
    [],
  );

  return { bookmarks, isBookmarked, toggleBookmark, removeBookmark };
}
