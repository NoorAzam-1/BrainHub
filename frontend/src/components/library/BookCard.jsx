import Image from "next/image";
import Link from "next/link";

export default function BookCard({ title, author, progress, image, bg }) {
  return (
    <Link href="/browse" className="group cursor-pointer">
      <div className="card p-4" style={{ backgroundColor: bg }}>
        <Image
          alt="iamges"
          src={image}
          height={600}
          width={400}
          className="w-full aspect-2/3 rounded-2xl mb-3 object-cover group-hover:scale-105 transition"
        />
      </div>

      <h4 className="font-semibold text-on-surface group-hover:text-primary truncate mt-3">
        {title}
      </h4>

      <p className="text-xs text-on-surface-variant mb-2">{author}</p>

      <div className="flex items-center gap-2">
        <div className="flex-1 bg-surface-light h-1 rounded-full overflow-hidden">
          <div className="bg-linear-to-r from-primary to-secondary h-1" style={{ width: `${progress}%` }} />
        </div>
        <span className="text-xs text-primary">{progress}%</span>
      </div>
    </Link>
  );
}
