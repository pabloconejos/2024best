export interface RootSong {
    song: Song
  }
  
  export interface Song {
    annotation_count: number
    api_path: string
    apple_music_id: string
    apple_music_player_url: string
    artist_names: string
    description: Description
    embed_content: string
    featured_video: boolean
    full_title: string
    header_image_thumbnail_url: string
    header_image_url: string
    id: number
    language: string
    lyrics_owner_id: number
    lyrics_state: string
    path: string
    primary_artist_names: string
    pyongs_count: any
    recording_location: any
    relationships_index_url: string
    release_date: string
    release_date_for_display: string
    release_date_with_abbreviated_month_for_display: string
    song_art_image_thumbnail_url: string
    song_art_image_url: string
    stats: Stats
    title: string
    title_with_featured: string
    url: string
    current_user_metadata: CurrentUserMetadata
    song_art_primary_color: string
    song_art_secondary_color: string
    song_art_text_color: string
    album: Album
    custom_performances: CustomPerformance[]
    description_annotation: DescriptionAnnotation
    featured_artists: any[]
    lyrics_marked_complete_by: LyricsMarkedCompleteBy
    lyrics_marked_staff_approved_by: any
    media: Medum[]
    primary_artist: PrimaryArtist2
    primary_artists: PrimaryArtist3[]
    producer_artists: ProducerArtist[]
    song_relationships: SongRelationship[]
    translation_songs: any[]
    verified_annotations_by: any[]
    verified_contributors: any[]
    verified_lyrics_by: any[]
    writer_artists: WriterArtist[]
  }
  
  export interface Description {
    dom: Dom
  }
  
  export interface Dom {
    tag: string
    children: [
      Children,
      string,
      Children2,
      string,
      Children3,
      string,
      Children5,
      string,
      Children6,
      string,
      Children7
    ]
  }
  
  export interface Children {
    tag: string
    children: string[]
  }
  
  export interface Children2 {
    tag: string
    children: string[]
  }
  
  export interface Children3 {
    tag: string
    children: Children4[]
  }
  
  export interface Children4 {
    tag: string
    attributes: Attributes
    children: string[]
  }
  
  export interface Attributes {
    href: string
    rel: string
  }
  
  export interface Children5 {
    tag: string
    children: string[]
  }
  
  export interface Children6 {
    tag: string
    children: string[]
  }
  
  export interface Children7 {
    tag: string
    children: string[]
  }
  
  export interface Stats {
    accepted_annotations: number
    contributors: number
    iq_earners: number
    transcribers: number
    unreviewed_annotations: number
    verified_annotations: number
    hot: boolean
    pageviews: number
  }
  
  export interface CurrentUserMetadata {
    permissions: string[]
    excluded_permissions: string[]
    interactions: Interactions
    relationships: Relationships
    iq_by_action: IqByAction
  }
  
  export interface Interactions {
    pyong: boolean
    following: boolean
  }
  
  export interface Relationships {}
  
  export interface IqByAction {}
  
  export interface Album {
    api_path: string
    cover_art_url: string
    full_title: string
    id: number
    name: string
    primary_artist_names: string
    release_date_for_display: string
    url: string
    artist: Artist
    primary_artists: PrimaryArtist[]
  }
  
  export interface Artist {
    api_path: string
    header_image_url: string
    id: number
    image_url: string
    is_meme_verified: boolean
    is_verified: boolean
    name: string
    url: string
    iq: number
  }
  
  export interface PrimaryArtist {
    api_path: string
    header_image_url: string
    id: number
    image_url: string
    is_meme_verified: boolean
    is_verified: boolean
    name: string
    url: string
    iq: number
  }
  
  export interface CustomPerformance {
    label: string
    artists: Artist2[]
  }
  
  export interface Artist2 {
    api_path: string
    header_image_url: string
    id: number
    image_url: string
    is_meme_verified: boolean
    is_verified: boolean
    name: string
    url: string
    iq?: number
  }
  
  export interface DescriptionAnnotation {
    _type: string
    annotator_id: number
    annotator_login: string
    api_path: string
    classification: string
    fragment: string
    id: number
    is_description: boolean
    path: string
    range: Range
    song_id: number
    url: string
    verified_annotator_ids: any[]
    annotatable: Annotatable
    annotations: Annotation[]
  }
  
  export interface Range {
    content: string
  }
  
  export interface Annotatable {
    api_path: string
    client_timestamps: ClientTimestamps
    context: string
    id: number
    image_url: string
    link_title: string
    title: string
    type: string
    url: string
  }
  
  export interface ClientTimestamps {
    updated_by_human_at: number
    lyrics_updated_at: number
  }
  
  export interface Annotation {
    api_path: string
    body: Body
    comment_count: number
    community: boolean
    custom_preview: any
    has_voters: boolean
    id: number
    pinned: boolean
    share_url: string
    source: any
    state: string
    url: string
    verified: boolean
    votes_total: number
    current_user_metadata: CurrentUserMetadata2
    authors: Author[]
    cosigned_by: any[]
    rejection_comment: any
    verified_by: any
  }
  
  export interface Body {
    dom: Dom2
  }
  
  export interface Dom2 {
    tag: string
    children: [
      Children8,
      string,
      Children9,
      string,
      Children10,
      string,
      Children12,
      string,
      Children13,
      string,
      Children14
    ]
  }
  
  export interface Children8 {
    tag: string
    children: string[]
  }
  
  export interface Children9 {
    tag: string
    children: string[]
  }
  
  export interface Children10 {
    tag: string
    children: Children11[]
  }
  
  export interface Children11 {
    tag: string
    attributes: Attributes2
    children: string[]
  }
  
  export interface Attributes2 {
    href: string
    rel: string
  }
  
  export interface Children12 {
    tag: string
    children: string[]
  }
  
  export interface Children13 {
    tag: string
    children: string[]
  }
  
  export interface Children14 {
    tag: string
    children: string[]
  }
  
  export interface CurrentUserMetadata2 {
    permissions: any[]
    excluded_permissions: string[]
    interactions: Interactions2
    iq_by_action: IqByAction2
  }
  
  export interface Interactions2 {
    cosign: boolean
    pyong: boolean
    vote: any
  }
  
  export interface IqByAction2 {}
  
  export interface Author {
    attribution: number
    pinned_role: any
    user: User
  }
  
  export interface User {
    api_path: string
    avatar: Avatar
    header_image_url: string
    human_readable_role_for_display: any
    id: number
    iq: number
    login: string
    name: string
    role_for_display: any
    url: string
    current_user_metadata: CurrentUserMetadata3
  }
  
  export interface Avatar {
    tiny: Tiny
    thumb: Thumb
    small: Small
    medium: Medium
  }
  
  export interface Tiny {
    url: string
    bounding_box: BoundingBox
  }
  
  export interface BoundingBox {
    width: number
    height: number
  }
  
  export interface Thumb {
    url: string
    bounding_box: BoundingBox2
  }
  
  export interface BoundingBox2 {
    width: number
    height: number
  }
  
  export interface Small {
    url: string
    bounding_box: BoundingBox3
  }
  
  export interface BoundingBox3 {
    width: number
    height: number
  }
  
  export interface Medium {
    url: string
    bounding_box: BoundingBox4
  }
  
  export interface BoundingBox4 {
    width: number
    height: number
  }
  
  export interface CurrentUserMetadata3 {
    permissions: any[]
    excluded_permissions: string[]
    interactions: Interactions3
  }
  
  export interface Interactions3 {
    following: boolean
  }
  
  export interface LyricsMarkedCompleteBy {
    api_path: string
    avatar: Avatar2
    header_image_url: string
    human_readable_role_for_display: string
    id: number
    iq: number
    login: string
    name: string
    role_for_display: string
    url: string
    current_user_metadata: CurrentUserMetadata4
  }
  
  export interface Avatar2 {
    tiny: Tiny2
    thumb: Thumb2
    small: Small2
    medium: Medium2
  }
  
  export interface Tiny2 {
    url: string
    bounding_box: BoundingBox5
  }
  
  export interface BoundingBox5 {
    width: number
    height: number
  }
  
  export interface Thumb2 {
    url: string
    bounding_box: BoundingBox6
  }
  
  export interface BoundingBox6 {
    width: number
    height: number
  }
  
  export interface Small2 {
    url: string
    bounding_box: BoundingBox7
  }
  
  export interface BoundingBox7 {
    width: number
    height: number
  }
  
  export interface Medium2 {
    url: string
    bounding_box: BoundingBox8
  }
  
  export interface BoundingBox8 {
    width: number
    height: number
  }
  
  export interface CurrentUserMetadata4 {
    permissions: any[]
    excluded_permissions: string[]
    interactions: Interactions4
  }
  
  export interface Interactions4 {
    following: boolean
  }
  
  export interface Medum {
    provider: string
    start: number
    type: string
    url: string
  }
  
  export interface PrimaryArtist2 {
    api_path: string
    header_image_url: string
    id: number
    image_url: string
    is_meme_verified: boolean
    is_verified: boolean
    name: string
    url: string
  }
  
  export interface PrimaryArtist3 {
    api_path: string
    header_image_url: string
    id: number
    image_url: string
    is_meme_verified: boolean
    is_verified: boolean
    name: string
    url: string
  }
  
  export interface ProducerArtist {
    api_path: string
    header_image_url: string
    id: number
    image_url: string
    is_meme_verified: boolean
    is_verified: boolean
    name: string
    url: string
    iq?: number
  }
  
  export interface SongRelationship {
    relationship_type: string
    type: string
    songs: any[]
  }
  
  export interface WriterArtist {
    api_path: string
    header_image_url: string
    id: number
    image_url: string
    is_meme_verified: boolean
    is_verified: boolean
    name: string
    url: string
    iq?: number
  }
  