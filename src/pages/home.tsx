import { meta } from "../components/constants";

export function Home() {
    return (
        <>
            <h1 class="text-3xl font-medium mb-5">FREE ROSS.</h1>
            <p class="text-xl">
                After 11 years behind bars, Ross Ulbricht - the visionary
                founder of Silk Road - has been granted a full and unconditional
                pardon by President Trump. This marks a historic victory for
                freedom, privacy, and decentralization.
            </p>
            <br />
            <p class="text-xl">
                Known as the "Dread Pirate Roberts," Ross created Silk Road in
                2011 as one of the first platforms to demonstrate Bitcoin's
                potential for truly peer-to-peer, anonymous transactions.
                Despite facing life imprisonment for non-violent charges, Ross
                never wavered from his principles of freedom and individual
                sovereignty.
            </p>
            <br />
            <p class="text-xl">
                Today, we honor Ross's legacy on Base - built by a developer who
                has been part of the freedom journey since the beginning. This
                project represents our continued commitment to the values Ross
                fought for: privacy, decentralization, and resistance against
                overreach.
            </p>
            <br />
            <p class="text-xl">
                Join our community and support the movement through our{" "}
                <a class="text-brand hover:underline font-bold" href="/links">
                    links
                </a>{" "}
                page or learn more about Ross's story in our{" "}
                <a
                    class="text-brand hover:underline font-bold"
                    href="/links#press"
                >
                    press coverage
                </a>
                .
            </p>
        </>
    );
}
