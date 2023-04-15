import { ROUTES } from "@routes/config";
import { generatePath } from "react-router-dom";
import { StoryTypes } from "./stories";

export const LINK_TO_TOP_STORIES = generatePath(ROUTES.STORIES, { storyType: StoryTypes.TOP });
export const LINK_TO_BEST_STORIES = generatePath(ROUTES.STORIES, { storyType: StoryTypes.BEST });
export const LINK_TO_NEW_STORIES = generatePath(ROUTES.STORIES, { storyType: StoryTypes.NEW });

export const GUIDELINES_LINK = "https://news.ycombinator.com/newsguidelines.html";
export const FAQ_LINK = "https://news.ycombinator.com/newsfaq.html";
export const LISTS_LINK = "https://news.ycombinator.com/lists";
export const API_LINK = "https://github.com/HackerNews/API";
export const SECURITY_LINK = "https://news.ycombinator.com/security.html";
export const LEGAL_LINK = "https://www.ycombinator.com/legal/";
export const APPLY_TO_YC_LINK = "https://www.ycombinator.com/apply/";
export const CONTACT = "mailto:hn@ycombinator.com";
