import {
  BaseSource,
  Candidate,
} from "https://deno.land/x/ddc_vim@v0.17.0/types.ts";
import {
  assertEquals,
  Denops,
  fn,
} from "https://deno.land/x/ddc_vim@v0.17.0/deps.ts#^";

type Gitmoji = {
  emoji:       string;
  entry:       string;
  code:        string;
  description: string;
  name:        string;
  semver:      string;
}

export type CompleteMetadata = {
  name: string;
  gitmoji: string;
  description: string;
}

function getGitmoji(): CompleteMetadata[] {
  const gitmoji = gitmojiJson.gitmojis.map((data: Gitmoji) => ({name: data.code, gitmoji: data.emoji, description: data.description}));
  return gitmoji;
}

const gitmojiJson = {
  gitmojis: [
    {
      "emoji": "🎨",
      "entity": "&#x1f3a8;",
      "code": ":art:",
      "description": "Improve structure / format of the code.",
      "name": "art",
      "semver": null
    },
    {
      "emoji": "⚡️",
      "entity": "&#x26a1;",
      "code": ":zap:",
      "description": "Improve performance.",
      "name": "zap",
      "semver": "patch"
    },
    {
      "emoji": "🔥",
      "entity": "&#x1f525;",
      "code": ":fire:",
      "description": "Remove code or files.",
      "name": "fire",
      "semver": null
    },
  ]
};


export class Source extends BaseSource<Record<string, never>> {
  async gatherCandidates(): Promise<Candidate<CompleteMetadata>[]> {
    const candidates = getGitmoji();
    const ddcCandidates = candidates.flatMap(data => {
      return {
        word: data.gitmoji,
        abbr: data.name,
        kind: data.description,
        user_data: {
          name: data.name,
          gitmoji: data.gitmoji,
          description: data.description,
        },
      };
    });
    return Promise.resolve(ddcCandidates);
  }

  params() {
    return {};
  }
}
