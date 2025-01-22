import { meta } from "../components/constants";
const email = meta.email.split("//").join(" // ");

export function Links() {
    return (
        <>
            <h1 class="text-3xl font-medium mb-5">Contact</h1>
            <p class="text-xl">
                Clank Creator:{" "}
                <a
                    class="text-brand hover:underline font-bold"
                    href="https://warpcast.com/nickysap/0x61116063"
                >
                    Nicky Sap
                </a>
            </p>
            <br />
            <h1 class="text-3xl font-medium mb-5">Built On Base</h1>
            <p class="text-xl">
                <a
                    class="text-brand hover:underline font-bold"
                    href="https://basescan.org/address/0x3cec64b00367343b1a67497be61e6f4d1b2fee3b"
                >
                    Contract
                </a>
            </p>
            <br />
            <h1 class="text-3xl font-medium mb-5">Press Coverage</h1>
            <p class="text-xl">
                <a
                    class="text-brand hover:underline font-bold"
                    href="https://nypost.com/2025/01/21/us-news/trump-expected-to-pardon-silk-road-founder-ross-ulbricht-vacating-life-sentence/"
                >
                    NY Post - Trump Expected to Pardon Silk Road Founder
                </a>
                <br />
                <a
                    class="text-brand hover:underline font-bold"
                    href="https://www.wired.com/story/trump-frees-silk-road-creator-ross-ulbricht-after-11-years-in-prison/"
                >
                    Wired - Trump Frees Silk Road Creator
                </a>
                <br />
                <a
                    class="text-brand hover:underline font-bold"
                    href="https://www.reuters.com/world/us/trump-pardons-silk-road-founder-ulbricht-online-drug-scheme-2025-01-22/"
                >
                    Reuters - Trump Pardons Silk Road Founder
                </a>
                <br />
                <a
                    class="text-brand hover:underline font-bold"
                    href="https://www.npr.org/2025/01/21/nx-s1-5270051/trump-pardons-dark-web-marketplace-creator-ross-ulbricht"
                >
                    NPR - Trump Pardons Dark Web Marketplace Creator
                </a>
            </p>
            <br />
            <h1 class="text-3xl font-medium mb-5">Markets</h1>
            <p class="text-xl">
                <a
                    class="text-brand hover:underline font-bold"
                    href="https://dexscreener.com/base/0x6e689d6b01445a698649b330b93cc2c538e4a79c"
                >
                    DexScreener
                </a>
                <br />
                <a
                    class="text-brand hover:underline font-bold"
                    href="https://www.clanker.world/clanker/0x3cec64b00367343b1A67497be61e6F4d1b2FEE3B"
                >
                    Clanker
                </a>
            </p>
        </>
    );
}
