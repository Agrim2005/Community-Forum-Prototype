import { CommunityCard } from "@/components/common";
import { communities } from "@/data/communities";
import { useState } from "react";

const CommunitiesPage = () => {
    const [search, setSearch] = useState("");

    const filteredCommunities = communities.filter((community) => {
        const query = search.toLowerCase();

        return (
            community.name.toLowerCase().includes(query) ||
            community.category.toLowerCase().includes(query) ||
            community.description.toLowerCase().includes(query)
        );
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="mb-10">
                <h1 className="text-4xl font-bold">
                    Communities
                </h1>

                {/* 2. Separated the paragraph text from the input container */}
                <p className="text-gray-500 mt-2">
                    Discover communities that match your interests.
                </p>

                <div className="mt-6">
                    <input
                        type="text"
                        placeholder="Search communities..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            {filteredCommunities.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCommunities.map((community) => (
                        <CommunityCard
                            key={community.id}
                            community={community}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-semibold">
                        No communities found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Try searching with a different keyword.
                    </p>
                </div>
            )}
        </div>
    );
};

export default CommunitiesPage;