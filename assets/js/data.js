// ============================================
// Data.js - 資料設定檔
// 包含：UI 翻譯、專案資料、文章資料、多語系
// ============================================

// 1. UI 靜態文字翻譯
export const uiTranslations = {
    'zh-TW': {
        nav_about: "關於我",
        nav_projects: "專案",
        nav_blog: "文章",
        role: "Unity 開發者 / 遊戲程式設計師",
        about_text: `你好！我是一名喜愛遊戲開發的工程師。擅長使用 <strong>Unity</strong> 與 <strong>C#</strong>，目前已在台灣累積三年左右的相關經驗。<br><br>除了平時的工作之外我也對<strong>閱讀技術書籍</strong>、<strong>撰寫心得筆記</strong>有濃厚興趣，我很享受學習的過程，也持續尋找精進技能的方法。<br><br>同時我也很喜歡與人交流<strong>遊戲玩法</strong>、<strong>程式技巧</strong>等內容，希望透過作品和更多人交流與成長！`,
        btn_view_project: "查看專案",
        btn_read_article: "閱讀文章"
    },
    'en-US': {
        nav_about: "About Me",
        nav_projects: "Projects",
        nav_blog: "Blog",
        role: "Unity Developer / Game Programmer",
        about_text: `Hello! I am an engineer passionate about game development, specializing in <strong>Unity</strong> and <strong>C#</strong>. I have accumulated about three years of relevant experience in Taiwan.<br><br>Beyond my daily work, I have a strong interest in <strong>reading technical books</strong> and <strong>writing study notes</strong>. I enjoy the learning process and constantly seek ways to improve my skills.<br><br>I also love exchanging ideas about <strong>gameplay mechanics</strong> and <strong>programming techniques</strong>. I hope to connect and grow with more people through my work!`,
        btn_view_project: "View Project",
        btn_read_article: "Read Article"
    },
    'ja-JP': {
        nav_about: "私について",
        nav_projects: "ポートフォリオ",
        nav_blog: "ブログ",
        role: "Unity 開発者 / ゲームプログラマー",
        about_text: `こんにちは！ゲーム開発が大好きなエンジニアです。<strong>Unity</strong> と <strong>C#</strong> を得意とし、台湾で約3年間の実務経験を積んできました。<br><br>普段の仕事以外にも、<strong>技術書の読書</strong>や<strong>学習ノートの執筆</strong>に強い関心を持っています。学ぶ過程を楽しみ、常にスキルを磨く方法を探求しています。<br><br>また、<strong>ゲームの遊び方</strong>や<strong>プログラミング技術</strong>について交流することも大好きです。作品を通じて、より多くの人と交流し、共に成長できることを願っています！`,
        btn_view_project: "プロジェクトを見る",
        btn_read_article: "記事を読む"
    }
};

// 2. 作品集資料
export const projects = [
    {
        title: {
            'zh-TW': "Atlas Repeat Checker",
            'en-US': "Atlas Repeat Checker",
            'ja-JP': "Atlas Repeat Checker"
        },
        desc: {
            'zh-TW': "Unity 編輯器工具，透過分析圖集(Sprite Atlas)內部的圖片(Sprite/Texture)，並檢測是否有重複的圖集關聯著相同的圖片。",
            'en-US': "A Unity Editor tool that analyzes images (Sprite/Texture) within Sprite Atlases to detect if duplicate atlases are referencing the same images.",
            'ja-JP': "Sprite Atlas内の画像を分析し、重複したアトラスが同じ画像を参照していないか検出するUnityエディタ拡張ツール。"
        },
        tags: ["Tool", "C#", "Unity", "Analyzes"],
        image: "assets/images/Blogs_AtlasRepeatChecker.gif",
        link: "https://github.com/Cyi0310/AtlasRepeatChecker"
    },
    {
        title: {
            'zh-TW': "Animator Parameter",
            'en-US': "Animator Parameter",
            'ja-JP': "Animator Parameter"
        },
        desc: {
            'zh-TW': "在Unity的專案環境下，使用指定的Attribute，能取得Animator內部的Parameter功能。",
            'en-US': "Access Animator Parameters within Unity projects using specified Attributes.",
            'ja-JP': "指定されたAttributeを使用して、Unityプロジェクト内のAnimatorパラメータにアクセスする機能。"
        },
        tags: ["Tool", "C#", "Unity", "Attribute"],
        image: "assets/images/Blogs_AnimatorParameter.gif",
        link: "https://github.com/Cyi0310/Animator-Parameter"
    },
    {
        title: {
            'zh-TW': "Moerusa",
            'en-US': "Moerusa",
            'ja-JP': "Moerusa"
        },
        desc: {
            'zh-TW': "Moerusa是一款ARPG的劇情動作遊戲，以2.5D第三人稱為視角，並主打美式卡通風格而打造的遊戲。",
            'en-US': "Moerusa is a story-driven ARPG action game with a 2.5D third-person perspective, featuring an American cartoon art style.",
            'ja-JP': "Moerusaは、2.5Dの三人称視点を採用し、アメリカンカートゥーンスタイルを特徴とするストーリー主導型のARPGアクションゲームです。"
        },
        tags: ["大學專案", "C#", "Unity"],
        image: "https://img.youtube.com/vi/ic1C4ENIRlE/sddefault.jpg",
        videoId: "ic1C4ENIRlE",
        link: "https://www.youtube.com/watch?v=GklFfVLfeUk"
    }
];

// 3. 文章資料
export const blogs = [
    {
        title: {
            'zh-TW': "TGDF｜遊戲軟體工程師生存守則｜筆記&心得整理",
            'en-US': "TGDF｜遊戲軟體工程師生存守則｜筆記&心得整理",
            'ja-JP': "TGDF｜遊戲軟體工程師生存守則｜筆記&心得整理",
        },
        desc: {
            'zh-TW': "「遊戲軟體工程師生存守則」的三大核心：Coding Skill、Knowledge、Direction。這三個方向...",
            'en-US': "「遊戲軟體工程師生存守則」的三大核心：Coding Skill、Knowledge、Direction。這三個方向...",
            'ja-JP': "「遊戲軟體工程師生存守則」的三大核心：Coding Skill、Knowledge、Direction。這三個方向...",
        },
        tags: ["TGDF", "軟體工程師", "筆記&心得整理"],
        date: "Apr 9, 2025",
        link: "https://medium.com/@cpa11225637/tgdf-%E9%81%8A%E6%88%B2%E8%BB%9F%E9%AB%94%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%94%9F%E5%AD%98%E5%AE%88%E5%89%87-%E7%AD%86%E8%A8%98-%E5%BF%83%E5%BE%97%E6%95%B4%E7%90%86-fa556f448185"
    },
    {
        title: {
            'zh-TW': "TGDF｜別太敏捷遊戲開發｜筆記&心得整理",
            'en-US': "TGDF｜別太敏捷遊戲開發｜筆記&心得整理",
            'ja-JP': "TGDF｜別太敏捷遊戲開發｜筆記&心得整理",
        },
        desc: {
            'zh-TW': "開發遊戲 90% 都是人與人的互動，唯有真正的文化，才能影響人與人的互動， 最後提升...",
            'en-US': "開發遊戲 90% 都是人與人的互動，唯有真正的文化，才能影響人與人的互動， 最後提升...",
            'ja-JP': "開發遊戲 90% 都是人與人的互動，唯有真正的文化，才能影響人與人的互動， 最後提升...",
        },
        tags: ["TGDF", "敏捷開發", "筆記&心得整理"],
        date: "Mar 23, 2025",
        link: "https://medium.com/@cpa11225637/tgdf-%E5%88%A5%E5%A4%AA%E6%95%8F%E6%8D%B7%E9%81%8A%E6%88%B2%E9%96%8B%E7%99%BC-%E7%AD%86%E8%A8%98-%E5%BF%83%E5%BE%97%E6%95%B4%E7%90%86-4b793e4c4e5a"
    },
    {
        title: {
            'zh-TW': "TGDF｜以小博大：談小型技術團隊的建構｜筆記&心得整理",
            'en-US': "TGDF｜以小博大：談小型技術團隊的建構｜筆記&心得整理",
            'ja-JP': "TGDF｜以小博大：談小型技術團隊的建構｜筆記&心得整理",
        },
        desc: {
            'zh-TW': "開發階段，迭代的是介面，當介面決定完後，就可以進入量產期。介面決定了，即使...",
            'en-US': "開發階段，迭代的是介面，當介面決定完後，就可以進入量產期。介面決定了，即使...",
            'ja-JP': "開發階段，迭代的是介面，當介面決定完後，就可以進入量產期。介面決定了，即使...",
        },
        tags: ["TGDF", "製成規劃", "筆記&心得整理"],
        date: "Mar 15, 2025",
        link: "https://medium.com/@cpa11225637/tgdf-%E4%BB%A5%E5%B0%8F%E5%8D%9A%E5%A4%A7-%E8%AB%87%E5%B0%8F%E5%9E%8B%E6%8A%80%E8%A1%93%E5%9C%98%E9%9A%8A%E7%9A%84%E5%BB%BA%E6%A7%8B%E8%88%87%E5%8F%AF%E8%BF%AD%E4%BB%A3%E7%9A%84%E9%96%8B%E7%99%BC%E6%9E%B6%E6%A7%8B-%E7%AD%86%E8%A8%98-%E5%BF%83%E5%BE%97%E6%95%B4%E7%90%86-c89886ffece5"
    },
    {
        title: {
            'zh-TW': "不是資工畢業，也能當遊戲工程師嗎！｜心得分享",
            'en-US': "不是資工畢業，也能當遊戲工程師嗎！｜心得分享",
            'ja-JP': "不是資工畢業，也能當遊戲工程師嗎！｜心得分享",
        },
        desc: {
            'zh-TW': "「開發」的話，製作初期會收到一份企劃書，裡面包含各種功能需求。在這個階段...",
            'en-US': "「開發」的話，製作初期會收到一份企劃書，裡面包含各種功能需求。在這個階段...",
            'ja-JP': "「開發」的話，製作初期會收到一份企劃書，裡面包含各種功能需求。在這個階段...",
        },
        tags: ["心得分享"],
        date: "Jul 15, 2023",
        link: "https://medium.com/@cpa11225637/%E4%B8%8D%E6%98%AF%E8%B3%87%E5%B7%A5%E7%95%A2%E6%A5%AD-%E4%B9%9F%E8%83%BD%E7%95%B6%E9%81%8A%E6%88%B2%E5%B7%A5%E7%A8%8B%E5%B8%AB%E5%97%8E-%E5%BF%83%E5%BE%97%E5%88%86%E4%BA%AB-d4d192e8262f"
    }
];