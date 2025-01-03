// loading.tsx enables "streaming", this is fallback page as data loads

import DashboardSkeleton from "../../ui/skeletons";

// it is built on top of Suspense
export default function Loadiing() {
    return <DashboardSkeleton />
}