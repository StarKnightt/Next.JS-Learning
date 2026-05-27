export interface ContentBlock {
  type: "text" | "code" | "callout" | "heading" | "diagram" | "comparison" | "video";
  content?: string;
  code?: string;
  filename?: string;
  language?: string;
  highlight?: number[];
  calloutType?: "info" | "warning" | "tip" | "danger";
  title?: string;
  level?: 2 | 3;
  items?: { left: string; right: string; label: string }[];
  videos?: { id: string; title: string; channel: string }[];
}

export interface ChapterContent {
  slug: string;
  blocks: ContentBlock[];
}

import { content as gettingStarted } from "./chapters/getting-started";
import { content as fileRouting } from "./chapters/file-routing";
import { content as layoutsTemplates } from "./chapters/layouts-templates";
import { content as components } from "./chapters/components";
import { content as styling } from "./chapters/styling";
import { content as dynamicRoutes } from "./chapters/dynamic-routes";
import { content as serverClientComponents } from "./chapters/server-client-components";
import { content as dataFetching } from "./chapters/data-fetching";
import { content as serverActions } from "./chapters/server-actions";
import { content as apiRoutes } from "./chapters/api-routes";
import { content as middleware } from "./chapters/middleware";
import { content as loadingErrorStates } from "./chapters/loading-error-states";
import { content as authentication } from "./chapters/authentication";
import { content as advancedPatterns } from "./chapters/advanced-patterns";
import { content as deployment } from "./chapters/deployment";
import { content as metadataSeo } from "./chapters/metadata-seo";
import { content as performance } from "./chapters/performance";

export const chapterContents: Record<string, ContentBlock[]> = {
  "getting-started": gettingStarted,
  "file-routing": fileRouting,
  "layouts-templates": layoutsTemplates,
  "components": components,
  "styling": styling,
  "dynamic-routes": dynamicRoutes,
  "server-client-components": serverClientComponents,
  "data-fetching": dataFetching,
  "server-actions": serverActions,
  "api-routes": apiRoutes,
  "middleware": middleware,
  "loading-error-states": loadingErrorStates,
  "authentication": authentication,
  "advanced-patterns": advancedPatterns,
  "deployment": deployment,
  "metadata-seo": metadataSeo,
  "performance": performance,
};
