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

const gitmojiJson = JSON.parse(Deno.readTextFileSync('../../data/gitmojis.json'));

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
