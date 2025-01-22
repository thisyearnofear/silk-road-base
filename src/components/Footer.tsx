import { meta } from "./constants";

export function Footer() {
    return (
        <footer class="flex justify-between mt-auto border-t-2 border-t-neutral-200 px-5 py-2">
            <a
                class="text-brand hover:underline"
                href="https://x.com/nicky_sap/status/1881890392402166129"
            >
                Twitter
            </a>
            <a
                class="text-brand hover:underline"
                href="https://clanker.world/clanker/0x3cec64b00367343b1A67497be61e6F4d1b2FEE3B"
            >
                🏗️ Clanker
            </a>
            <a
                class="text-brand hover:underline"
                href="https://dexscreener.com/base/0x6e689d6b01445a698649b330b93cc2c538e4a79c"
            >
                Dexscreener
            </a>
        </footer>
    );
}
