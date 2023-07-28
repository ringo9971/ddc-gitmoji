import { BaseSource, Item } from "https://deno.land/x/ddc_vim@v3.4.0/types.ts";
import {
  assertEquals,
  Denops,
  fn,
} from "https://deno.land/x/ddc_vim@v0.17.0/deps.ts#^";

type Gitmoji = {
  emoji: string;
  entry: string;
  code: string;
  description: string;
  name: string;
  semver: string;
};

export type CompleteMetadata = {
  name: string;
  gitmoji: string;
  description: string;
};

function getGitmoji(): CompleteMetadata[] {
  const gitmoji = gitmojiJson.gitmojis.map((data: Gitmoji) => ({
    name: data.code,
    gitmoji: data.code,
    description: data.emoji + " " + data.description,
  }));
  return gitmoji;
}

const gitmojiJson = {
  gitmojis: [
    {
      emoji: "🎨",
      entity: "&#x1f3a8;",
      code: ":art:",
      description: "フォーマットを整える",
      name: "art",
      semver: null,
    },
    {
      emoji: "⚡️",
      entity: "&#x26a1;",
      code: ":zap:",
      description: "既存の機能に別の機能を追加",
      name: "zap",
      semver: "patch",
    },
    {
      emoji: "🔥",
      entity: "&#x1f525;",
      code: ":fire:",
      description: "機能の削除",
      name: "fire",
      semver: null,
    },
    {
      emoji: "🐛",
      entity: "&#x1f41b;",
      code: ":bug:",
      description: "バグを修正",
      name: "bug",
      semver: "patch",
    },
    {
      emoji: "🚑️",
      entity: "&#128657;",
      code: ":ambulance:",
      description: "緊急性の高いバグを修正",
      name: "ambulance",
      semver: "patch",
    },
    {
      emoji: "✨",
      entity: "&#x2728;",
      code: ":sparkles:",
      description: "新規機能の実装",
      name: "sparkles",
      semver: "minor",
    },
    {
      emoji: "📝",
      entity: "&#x1f4dd;",
      code: ":memo:",
      description: "処理に影響しない文章の修正",
      name: "memo",
      semver: null,
    },
    {
      emoji: "🚀",
      entity: "&#x1f680;",
      code: ":rocket:",
      description: "デプロイ",
      name: "rocket",
      semver: null,
    },
    {
      emoji: "💄",
      entity: "&#ff99cc;",
      code: ":lipstick:",
      description: "UI やスタイルシートなど, 見た目に関する変更",
      name: "lipstick",
      semver: "patch",
    },
    {
      emoji: "🎉",
      entity: "&#127881;",
      code: ":tada:",
      description: "最初のコミット",
      name: "tada",
      semver: null,
    },
    {
      emoji: "✅",
      entity: "&#x2705;",
      code: ":white_check_mark:",
      description: "テストの追加/更新/合格",
      name: "white-check-mark",
      semver: null,
    },
    {
      emoji: "🔒️",
      entity: "&#x1f512;",
      code: ":lock:",
      description: "セキュリティに関する問題を修正",
      name: "lock",
      semver: "patch",
    },
    {
      emoji: "🔐",
      entity: "&#x1f510;",
      code: ":closed_lock_with_key:",
      description: "シークレットを追加/更新",
      name: "closed-lock-with-key",
      semver: null,
    },
    {
      emoji: "🔖",
      entity: "&#x1f516;",
      code: ":bookmark:",
      description: "リリース",
      name: "bookmark",
      semver: null,
    },
    {
      emoji: "🚨",
      entity: "&#x1f6a8;",
      code: ":rotating_light:",
      description: "コンパイラやリンタの警告を止めた時",
      name: "rotating-light",
      semver: null,
    },
    {
      emoji: "🚧",
      entity: "&#x1f6a7;",
      code: ":construction:",
      description: "作業途中",
      name: "construction",
      semver: null,
    },
    {
      emoji: "💚",
      entity: "&#x1f49a;",
      code: ":green_heart:",
      description: "CI ビルドを修正",
      name: "green-heart",
      semver: null,
    },
    {
      emoji: "⬇️",
      entity: "⬇️",
      code: ":arrow_down:",
      description: "依存関係をダウングレード",
      name: "arrow-down",
      semver: "patch",
    },
    {
      emoji: "⬆️",
      entity: "⬆️",
      code: ":arrow_up:",
      description: "依存関係をアップグレード",
      name: "arrow-up",
      semver: "patch",
    },
    {
      emoji: "📌",
      entity: "&#x1F4CC;",
      code: ":pushpin:",
      description: "依存関係を特定のバージョンに固定",
      name: "pushpin",
      semver: "patch",
    },
    {
      emoji: "👷",
      entity: "&#x1f477;",
      code: ":construction_worker:",
      description: "CI ビルドシステムを追加/更新",
      name: "construction-worker",
      semver: null,
    },
    {
      emoji: "📈",
      entity: "&#x1F4C8;",
      code: ":chart_with_upwards_trend:",
      description: "解析コードを追加",
      name: "chart-with-upwards-trend",
      semver: "patch",
    },
    {
      emoji: "♻️",
      entity: "&#x2672;",
      code: ":recycle:",
      description: "リファクタリング",
      name: "recycle",
      semver: null,
    },
    {
      emoji: "➕",
      entity: "&#10133;",
      code: ":heavy_plus_sign:",
      description: "依存関係を追加",
      name: "heavy-plus-sign",
      semver: "patch",
    },
    {
      emoji: "➖",
      entity: "&#10134;",
      code: ":heavy_minus_sign:",
      description: "依存関係を削除",
      name: "heavy-minus-sign",
      semver: "patch",
    },
    {
      emoji: "🔧",
      entity: "&#x1f527;",
      code: ":wrench:",
      description: "構成ファイルを追加/更新",
      name: "wrench",
      semver: "patch",
    },
    {
      emoji: "🔨",
      entity: "&#128296;",
      code: ":hammer:",
      description: "スクリプトを追加/更新",
      name: "hammer",
      semver: null,
    },
    {
      emoji: "🌐",
      entity: "&#127760;",
      code: ":globe_with_meridians:",
      description: "グローバル化に対応",
      name: "globe-with-meridians",
      semver: "patch",
    },
    {
      emoji: "✏️",
      entity: "&#59161;",
      code: ":pencil2:",
      description: "タイポの修正",
      name: "pencil2",
      semver: "patch",
    },
    {
      emoji: "💩",
      entity: "&#58613;",
      code: ":poop:",
      description: "汚いコード",
      name: "poop",
      semver: null,
    },
    {
      emoji: "⏪️",
      entity: "&#9194;",
      code: ":rewind:",
      description: "変更を基に戻す",
      name: "rewind",
      semver: "patch",
    },
    {
      emoji: "🔀",
      entity: "&#128256;",
      code: ":twisted_rightwards_arrows:",
      description: "ブランチをマージ",
      name: "twisted-rightwards-arrows",
      semver: null,
    },
    {
      emoji: "📦️",
      entity: "&#1F4E6;",
      code: ":package:",
      description: "コンパイルされたファイルの追加/更新",
      name: "package",
      semver: "patch",
    },
    {
      emoji: "👽️",
      entity: "&#1F47D;",
      code: ":alien:",
      description: "外部の API の変更による影響でコードを修正",
      name: "alien",
      semver: "patch",
    },
    {
      emoji: "🚚",
      entity: "&#1F69A;",
      code: ":truck:",
      description: "ファイルや名前の変更",
      name: "truck",
      semver: null,
    },
    {
      emoji: "📄",
      entity: "&#1F4C4;",
      code: ":page_facing_up:",
      description: "ライセンスの追加/更新",
      name: "page-facing-up",
      semver: null,
    },
    {
      emoji: "💥",
      entity: "&#x1f4a5;",
      code: ":boom:",
      description: "重大な変更の導入",
      name: "boom",
      semver: "major",
    },
    {
      emoji: "🍱",
      entity: "&#1F371",
      code: ":bento:",
      description: "アセットを追加/更新",
      name: "bento",
      semver: "patch",
    },
    {
      emoji: "♿️",
      entity: "&#9855;",
      code: ":wheelchair:",
      description: "アクセシビリティの向上",
      name: "wheelchair",
      semver: "patch",
    },
    {
      emoji: "💡",
      entity: "&#128161;",
      code: ":bulb:",
      description: "コメントを追記",
      name: "bulb",
      semver: null,
    },
    {
      emoji: "🍻",
      entity: "&#x1f37b;",
      code: ":beers:",
      description: "お酒を飲みながら書いたコード汚いコード",
      name: "beers",
      semver: null,
    },
    {
      emoji: "💬",
      entity: "&#128172;",
      code: ":speech_balloon:",
      description: "テキストやリテラルの追加や変更",
      name: "speech-balloon",
      semver: "patch",
    },
    {
      emoji: "🗃️",
      entity: "&#128451;",
      code: ":card_file_box:",
      description: "データベース関連の変更",
      name: "card-file-box",
      semver: "patch",
    },
    {
      emoji: "🔊",
      entity: "&#128266;",
      code: ":loud_sound:",
      description: "ログを更新",
      name: "loud-sound",
      semver: null,
    },
    {
      emoji: "🔇",
      entity: "&#128263;",
      code: ":mute:",
      description: "ログを削除",
      name: "mute",
      semver: null,
    },
    {
      emoji: "👥",
      entity: "&#128101;",
      code: ":busts_in_silhouette:",
      description: "寄稿者の追加/更新",
      name: "busts-in-silhouette",
      semver: null,
    },
    {
      emoji: "🚸",
      entity: "&#128696;",
      code: ":children_crossing:",
      description: "UX の向上",
      name: "children-crossing",
      semver: "patch",
    },
    {
      emoji: "🏗️",
      entity: "&#1f3d7;",
      code: ":building_construction:",
      description: "アーキテクチャを変更",
      name: "building-construction",
      semver: null,
    },
    {
      emoji: "📱",
      entity: "&#128241;",
      code: ":iphone:",
      description: "レスポンシブデザインに対応",
      name: "iphone",
      semver: "patch",
    },
    {
      emoji: "🤡",
      entity: "&#129313;",
      code: ":clown_face:",
      description: "モック関係",
      name: "clown-face",
      semver: null,
    },
    {
      emoji: "🥚",
      entity: "&#129370;",
      code: ":egg:",
      description: "イースターエッグを追加, 更新",
      name: "egg",
      semver: "patch",
    },
    {
      emoji: "🙈",
      entity: "&#8bdfe7;",
      code: ":see_no_evil:",
      description: ".gitignore を変更",
      name: "see-no-evil",
      semver: null,
    },
    {
      emoji: "📸",
      entity: "&#128248;",
      code: ":camera_with_flash:",
      description: "スナップショットを更新",
      name: "camera--with-flash",
      semver: null,
    },
    {
      emoji: "⚗️",
      entity: "&#128248;",
      code: ":alembic:",
      description: "実験を行う",
      name: "alembic",
      semver: "patch",
    },
    {
      emoji: "🔍️",
      entity: "&#128269;",
      code: ":mag:",
      description: "SEO を改善",
      name: "mag",
      semver: "patch",
    },
    {
      emoji: "🏷️",
      entity: "&#127991;",
      code: ":label:",
      description: "型を変更",
      name: "label",
      semver: "patch",
    },
    {
      emoji: "🌱",
      entity: "&#127793;",
      code: ":seedling:",
      description: "シードファイルを変更",
      name: "seedling",
      semver: null,
    },
    {
      emoji: "🚩",
      entity: "&#x1F6A9;",
      code: ":triangular_flag_on_post:",
      description: "フィーチャーフラグに関する変更",
      name: "triangular-flag-on-post",
      semver: "patch",
    },
    {
      emoji: "🥅",
      entity: "&#x1F945;",
      code: ":goal_net:",
      description: "エラーを取得",
      name: "goal-net",
      semver: "patch",
    },
    {
      emoji: "💫",
      entity: "&#x1f4ab;",
      code: ":dizzy:",
      description: "アニメーションを追加/更新",
      name: "animation",
      semver: "patch",
    },
    {
      emoji: "🗑️",
      entity: "&#x1F5D1;",
      code: ":wastebasket:",
      description: "後ほどクリーンアップする必要がある",
      name: "wastebasket",
      semver: "patch",
    },
    {
      emoji: "🛂",
      entity: "&#x1F6C2;",
      code: ":passport_control:",
      description: "アクセス権限に関わるコードログを削除",
      name: "passport-control",
      semver: "patch",
    },
    {
      emoji: "🩹",
      entity: "&#x1FA79;",
      code: ":adhesive_bandage:",
      description: "ちょっとした修正",
      name: "adhesive-bandage",
      semver: "patch",
    },
    {
      emoji: "🧐",
      entity: "&#x1F9D0;",
      code: ":monocle_face:",
      description: "データの調査や検査",
      name: "monocle-face",
      semver: null,
    },
    {
      emoji: "⚰️",
      entity: "&#x26B0;",
      code: ":coffin:",
      description: "デッドコードを削除",
      name: "coffin",
      semver: null,
    },
    {
      emoji: "🧪",
      entity: "&#x1F9EA;",
      code: ":test_tube:",
      description: "失敗例を追加",
      name: "test-tube",
      semver: null,
    },
    {
      emoji: "👔",
      entity: "&#128084;",
      code: ":necktie:",
      description: "ビジネスロジックを追加/更新",
      name: "necktie",
      semver: "patch",
    },
    {
      emoji: "🩺",
      entity: "&#x1FA7A;",
      code: ":stethoscope:",
      description: "ヘルスチェックを追加/更新",
      name: "stethoscope",
      semver: null,
    },
    {
      emoji: "🧱",
      entity: "&#x1f9f1;",
      code: ":bricks:",
      description: "インフラに関する変更",
      name: "bricks",
      semver: null,
    },
    {
      emoji: "🧑‍💻",
      entity: "&#129489;&#8205;&#128187;",
      code: ":technologist:",
      description: "開発者の育成のために書かれたコード",
      name: "technologist",
      semver: null,
    },
  ],
};

export class Source extends BaseSource<Record<string, never>> {
  async gather(): Promise<Item<CompleteMetadata>[]> {
    const candidates = getGitmoji();
    const ddcCandidates = candidates.flatMap((data) => {
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
