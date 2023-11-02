export interface MessageItem {
  timer: NodeJS.Timeout;
  state: "start" | "middle" | "end";
  text: string;
  type: "warn" | "error" | "success";
}
