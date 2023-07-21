Array.from(
    document.querySelectorAll(".octicon.octicon-git-merge.color-fg-done")
)
    .map((x) =>
        x.parentElement.parentElement.parentElement.previousElementSibling.querySelector(
            "input"
        )
    )
    .filter((x) => x.checked !== true)
    .forEach((x) => x.click());
