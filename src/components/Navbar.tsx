import { meta } from "./constants";

export function Navbar() {
    return (
        <nav class="w-72 pt-3 border-r-2 border-r-neutral-200 box-border">
            <ul>
                <li>
                    <a class="text-brand hover:underline text-xl" href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a class="text-brand hover:underline text-xl" href="/links">
                        Links
                    </a>
                </li>
                <li>
                    <a
                        class="text-brand hover:underline text-xl"
                        href="/links#press"
                    >
                        Press
                    </a>
                </li>
                <li>
                    <a
                        class="text-brand hover:underline text-xl"
                        href="/donate"
                    >
                        Donate
                    </a>
                </li>
            </ul>
        </nav>
    );
}
