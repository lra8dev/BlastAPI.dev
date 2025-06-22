export const loadConfigProps = (name: SliderNames) => {
  const items = {
    type: "number",
    placeholder: "10",
  };

  switch (name) {
    case "totalRequests":
      return { label: "Total Requests", props: { ...items, name: "totalRequests" } };
    case "duration":
      return { label: "Duration (s)", props: { ...items, name: "duration" } };
    case "concurrency":
      return { label: "Concurrency", props: { ...items, name: "concurrency" } };
    default:
      return { label: "Request Rate", props: { ...items, name: "requestRate" } };
  }
};
