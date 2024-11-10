export function applyRandomBorderColor() {
    console.log("applyRandomBorderColor is called")
    const skeletonModeisActivated =
        import.meta.env.VITE_SKELETON_MODE_ACTIVATED === "true"
    const skeletonElements = document.querySelectorAll(".skeleton")
    const colors = [
        "border-cat-teal",
        "border-cat-pink",
        "border-cat-flamingo",
        "border-cat-blue",
        "border-cat-mauve",
        "border-cat-yellow",
        "border-cat-green",
    ]
    skeletonElements.forEach((element) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        if (!skeletonModeisActivated) {
            element.classList.add("skeleton-disabled")
        }
        element.classList.add(randomColor)
    })
}

export function toggleSkeleton() {
    const skeletonElements = document.querySelectorAll(".skeleton")
    skeletonElements.forEach((element) => {
        element.classList.toggle("skeleton-disabled")
    })
}
