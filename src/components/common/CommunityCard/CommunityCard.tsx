import { useState } from "react";

import { Badge, Button, Card } from "@/components/ui";
import type { Community } from "@/types/community.types";

interface CommunityCardProps {
    community: Community;
}

const CommunityCard = ({ community }: CommunityCardProps) => {
    const [joined, setJoined] = useState(community.isJoined);
    const [members, setMembers] = useState(community.members);

    const handleJoin = () => {
        if (joined) {
            setMembers((prev) => prev - 1);
        } else {
            setMembers((prev) => prev + 1);
        }

        setJoined(!joined);
    };

    return (
        <div className="transition-all duration-300 hover:-translate-y-1">
            <Card>
                <div className="space-y-4">

                    <img
                        src={community.image}
                        alt={community.name}
                        className="w-full h-48 object-cover rounded-lg"
                    />

                    <div className="flex justify-between items-center">

                        <h2 className="text-xl font-semibold">
                            {community.name}
                        </h2>

                        <div className="flex gap-2">

                            <Badge>
                                {community.category}
                            </Badge>

                            {community.featured && (
                                <Badge>
                                    ⭐ Featured
                                </Badge>
                            )}

                        </div>

                    </div>

                    <p className="text-gray-600">
                        {community.description}
                    </p>

                    <p className="text-sm text-gray-500">
                        👥 {members.toLocaleString()} members
                    </p>

                    <Button
                        fullWidth
                        onClick={handleJoin}
                    >
                        {joined ? "Joined ✓" : "Join Community"}
                    </Button>

                </div>
            </Card>
        </div>
    );
};

export default CommunityCard;