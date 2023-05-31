import { CompletionMetadata } from "../@ddc-sources/gitmoji.ts";
import { BaseFilter, Item } from "https://deno.land/x/ddc_vim@v3.4.0/types.ts";
import { FilterArguments } from "https://deno.land/x/ddc_vim@v3.4.0/base/filter.ts";

export class Filter extends BaseFilter<Record<string, never>> {
  async filter(
    args: FilterArguments<Record<string, never>>
  ): Promise<Item[]> {
    return args.items.filter((item) => {
      const meta = item.user_data as unknown as CompletionMetadata;
      return meta && meta.name.startsWith(`${args.completeStr}`);
    });
  }

  params() {
    return {};
  }
}
