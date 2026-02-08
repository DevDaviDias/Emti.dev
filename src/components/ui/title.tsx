export default function Title({ title }: { title: string }) {
    return (
        <h2 className="text-2xl font-bold tracking-tighter mb-6">
            {title}
        </h2>
    )
}