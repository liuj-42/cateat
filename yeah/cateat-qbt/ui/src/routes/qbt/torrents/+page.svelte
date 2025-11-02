<script lang="ts">
	import TorrentCard from "$lib/components/+torrent-card.svelte";
import type { Torrent } from "$lib/models/torrent";
let { data } = $props();
console.log(data)

let torrent: Torrent = {
    "added_on": 1756820038,
    "amount_left": 0,
    "auto_tmm": false,
    "availability": -1,
    "category": "tv-sonarr",
    "comment": "",
    "completed": 1494876888,
    "completion_on": 1756820175,
    "content_path": "/data/torrents/[SubsPlease] Kanojo, Okarishimasu - 46 (1080p) [20FD493D].mkv",
    "dl_limit": 0,
    "dlspeed": 0,
    "download_path": "",
    "downloaded": 1505252561,
    "downloaded_session": 0,
    "eta": 8640000,
    "f_l_piece_prio": false,
    "force_start": false,
    "has_metadata": true,
    "hash": "e6a057b4da260c2a7b63841c7c05ba70e2282089",
    "inactive_seeding_time_limit": -2,
    "infohash_v1": "e6a057b4da260c2a7b63841c7c05ba70e2282089",
    "infohash_v2": "",
    "last_activity": 1762007804,
    "magnet_uri": "magnet:?xt=urn:btih:e6a057b4da260c2a7b63841c7c05ba70e2282089&dn=%5BSubsPlease%5D%20Kanojo%2C%20Okarishimasu%20-%2046%20%281080p%29%20%5B20FD493D%5D.mkv&xl=1494876888&tr=http%3A%2F%2Fnyaa.tracker.wf%3A7777%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce",
    "max_inactive_seeding_time": -1,
    "max_ratio": -1,
    "max_seeding_time": -1,
    "name": "[SubsPlease] Kanojo, Okarishimasu - 46 (1080p) [20FD493D].mkv",
    "num_complete": 155,
    "num_incomplete": 1,
    "num_leechs": 0,
    "num_seeds": 0,
    "popularity": 8.110917983249935,
    "priority": 0,
    "private": false,
    "progress": 1,
    "ratio": 16.043998479534892,
    "ratio_limit": -2,
    "reannounce": 9,
    "root_path": "",
    "save_path": "/data/torrents",
    "seeding_time": 5201696,
    "seeding_time_limit": -2,
    "seen_complete": 1762043255,
    "seq_dl": false,
    "size": 1494876888,
    "state": "stalledUP",
    "super_seeding": false,
    "tags": "",
    "time_active": 5201833,
    "total_size": 1494876888,
    "tracker": "udp://tracker.torrent.eu.org:451/announce",
    "trackers_count": 5,
    "up_limit": 0,
    "uploaded": 24150269800,
    "uploaded_session": 330989038,
    "upspeed": 0
  }




</script>

<div>
    {#each data.torrents as t}
        <TorrentCard info={t} />
    {/each}
</div>

