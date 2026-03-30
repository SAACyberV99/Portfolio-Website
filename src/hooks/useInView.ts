import { useEffect, useState, RefObject } from "react";

interface Options {
    threshold?: number;
    once?: boolean;
}

export function useInView(
    ref: RefObject<Element | null>,
    { threshold = 0.1, once = true }: Options = {}
    ): boolean {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(el);
            } else if (!once) {
            setInView(false);
            }
        },
        { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [ref, threshold, once]);

    return inView;
}

/*
useInView is a small React hook that tells you whether a DOM element has entered the viewport.

In your project, it takes:

a ref pointing to an element
optional settings: threshold and once in useInView.ts (line 8)
How it works:

It starts with inView = false in useInView.ts (line 12).
Inside useEffect, it creates an IntersectionObserver for ref.current in useInView.ts (line 14).
When the element crosses the visibility threshold, entry.isIntersecting becomes true, and the hook sets inView to true in useInView.ts (line 20).
If once is true (default), it stops observing after the first time the element appears in useInView.ts (line 22).
If once is false, it also sets inView back to false when the element leaves the viewport in useInView.ts (line 23).
Defaults:

threshold = 0.1: trigger when about 10% of the element is visible
once = true: trigger once, then stay true
Typical use:

const ref = useRef<HTMLDivElement>(null);
const inView = useInView(ref, { threshold: 0.15 });

<div
    ref={ref}
    className={inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
/>
*/