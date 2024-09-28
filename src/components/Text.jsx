export default function Text({
    as: Tag = "p",
    children,
    color = "#000",
    size = 16,
    letterSpacing = 0,
    weight = 400,
    uppercase = false,
}) {
    return (
        <Tag
            style={{
                fontSize: size,
                fontWeight: weight,
                color: color,
                letterSpacing: letterSpacing,
                textTransform: uppercase ? "uppercase" : "none",
            }}
        >
            {children}
        </Tag>
    );
}
