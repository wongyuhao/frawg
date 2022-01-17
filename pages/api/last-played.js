import { getLastPlayed } from "./spotify";

export default async (_, res) => {
  const response = await getLastPlayed();
  const {items} = await response.json();
  const {track} = items[0];
  const {artists, name, album} = track;

  return res.status(200).json({
    artists,
    name,
    album,

  });
};
