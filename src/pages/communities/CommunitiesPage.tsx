import { CommunityCard } from "@/components/common";
import { communities } from "@/data/communities";

const CommunitiesPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="mb-10">

                <h1 className="text-4xl font-bold">
                    Communities
                </h1>

                <p className="text-gray-500 mt-2">

                    <div className="mt-6">

                        <input
                            type="text"
                            placeholder="Search communities..."
                            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
                        />

                    </div>
                    Discover communities that match your interests.
                </p>

            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {communities.map((community) => (
                    <CommunityCard
                        key={community.id}
                        community={community}
                    />
                ))}

            </div>

        </div>
    );
};

export default CommunitiesPage;