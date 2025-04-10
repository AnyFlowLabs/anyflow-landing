// Example of blog post structure from API
// const a = {
//     "id": 29,
//     "documentId": "by9djqypj3qewyi8ws0peqx3",
//     "title": "Solana: The Fast, Cheap, and Future-Ready Blockchain?",
//     "description": "Solana is revolutionizing the world of cryptocurrencies! But is it the blockchain of the future?",
//     "slug": "solana-blockchain-fast-cheap-and-ready-for-the-future",
//     "createdAt": "2025-02-26T20:13:51.832Z",
//     "updatedAt": "2025-03-26T17:08:23.438Z",
//     "publishedAt": "2025-03-26T17:08:23.518Z",
//     "locale": "en",
//     "tags": "solana,blockchain,crypto,web3,defi",
//     "cover": {
//         "id": 2,
//         "documentId": "j9aw7hon73xsjx1w7gcrkpvy",
//         "url": "/uploads/DALL_E_2025_02_26_17_24_55_A_futuristic_digital_artwork_representing_Solana_blockchain_The_image_features_a_glowing_high_speed_data_stream_with_Solana_s_signature_purple_gree_83adf136f2.webp"
//     },
//     "author": {
//         "id": 1,
//         "documentId": "noy01qf8nmaocfitqouy857i",
//         "name": "Leo Frade",
//         "avatar": {
//             "id": 8,
//             "documentId": "l9sawysmvnyyatc5illayhdq",
//             "url": "/uploads/leo_frade_9bb437f49d.png"
//         }
//     }
// }

export interface BlogPost {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    tags: string;
    content?: string;
    cover?: {
        id: number;
        documentId: string;
        url: string;
    };
    author?: {
        id: number;
        documentId: string;
        name: string;
        avatar?: {
            id: number;
            documentId: string;
            url: string;
        };
    };
}

export interface BlogPostBlock {
    id: number;
    __component: string;
    body: string;
}

export interface BlogPostContent extends BlogPost {
    seo: {
        id: number;
        metaTitle: string;
        metaDescription: string;
        metaKeywords: string;
    };
    blocks: BlogPostBlock[];
}

export interface BlogPostsResponse {
    data: BlogPost[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface BlogPostResponse {
    data: BlogPostContent;
    meta: Record<string, unknown>;
} 