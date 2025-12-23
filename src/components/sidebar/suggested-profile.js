import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {} from "../../services/firebase";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";

const SuggestedProfile = ({
  spDocId,
  username,
  profileId,
  userId,
  loggedInDocId,
}) => {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    await updateLoggedInUserFollowing(loggedInDocId, profileId);

    await updateFollowedUserFollowers(spDocId, userId);
  }

  return !followed ? (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <Link to={`/p/${username}`}>
          <p className="text-sm font-bold">{username}</p>
        </Link>
      </div>

      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={() => handleFollowUser()}
      >
        Follow
      </button>
    </div>
  ) : null;
};

export default SuggestedProfile;

SuggestedProfile.propTypes = {
  spDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInDocId: PropTypes.string.isRequired,
};
