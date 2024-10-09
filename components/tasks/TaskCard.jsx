import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Link from "next/link";

export const TaskCard = ({ task }) => {
  return (
    <Link className="h-fit" href={`/dashboard/${task.id}`}>
      <div
        className={`px-3 py-4 w-full flex flex-col justify-center bg-opacity-20 gap-2 transition-all duration-300 ease-in-out hover:scale-105 shadow-md max-h-fit max-w-xs rounded border-l-8 ${
          task.priority === "casual"
            ? "bg-casual border-casual"
            : task.priority === "moderate"
            ? "bg-moderate border-moderate"
            : task.priority === "urgent"
            ? "bg-urgent border-urgent"
            : ""
        }`}
      >
        <div className="flex gap-1">
          <BookmarkBorderIcon />
          <h3 className=" font-semibold">{task.title}</h3>
        </div>
        {task.content && (
          <p className="leading-snug text-sm px-2">{task.content}</p>
        )}
      </div>
    </Link>
  );
};
