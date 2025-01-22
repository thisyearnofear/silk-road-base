import freeross from "../assets/freeross.png";

export function Donate() {
    return (
        <>
            <h1 class="text-3xl font-medium mb-5">Support Ross</h1>
            <div class="flex flex-col items-center">
                <a
                    href="https://freeross.org/"
                    class="hover:opacity-90 transition-opacity"
                >
                    <img
                        src={freeross}
                        alt="Free Ross"
                        class="max-w-2xl rounded-lg shadow-lg"
                    />
                </a>
                <p class="text-xl mt-5">
                    Click the image to visit{" "}
                    <a
                        href="https://freeross.org/"
                        class="text-brand hover:underline font-bold"
                    >
                        FreeRoss.org
                    </a>{" "}
                    and support Ross's ongoing journey.
                </p>
            </div>
        </>
    );
}
