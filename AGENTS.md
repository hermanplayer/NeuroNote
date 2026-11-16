# AGENTS.md — NeuroNote 專案開發規範

## 1. 專案目的
NeuroNote 是類神經網路（Neural Network）學習知識庫，提供初學者以清楚、循序漸進的方式閱讀概念、演算法與程式範例。網站使用原生 HTML、CSS、JavaScript，並部署於 GitHub Pages。

## 2. 技術限制
- 使用 HTML5、CSS3、原生 JavaScript。
- 不使用 React、Vue、Angular 或需要建置的框架。
- 不使用後端；所有內容皆為靜態頁面。
- 網站必須能直接由 GitHub Pages 開啟。
- 優先使用語意化 HTML，並確保手機與桌面皆可閱讀。

## 3. 網站風格
- 主題：深藍科技風，搭配青藍色重點色。
- 背景：深色；卡片使用略亮的深藍灰。
- 字體：系統字體優先，中文需清楚易讀。
- 版面：留白充足、卡片圓角、標題層級明確。
- 動畫保持簡潔，不得影響閱讀或造成眩暈。
- 所有頁面使用一致的導覽列、按鈕、卡片與頁尾。

## 4. 網站結構
- `index.html`：首頁與知識主題入口。
- `style.css`：全站樣式與 RWD。
- `script.js`：搜尋、篩選與互動功能。
- `pages/`：後續新增的教學文章。
- `assets/`：圖片、圖示等靜態素材。
- `README.md`：專案介紹、使用方式與部署步驟。

## 5. 新增文章規則
新增文章時：
1. 放入 `pages/`，檔名使用小寫英文與連字號，例如 `perceptron-basics.html`。
2. 每篇文章需包含：標題、學習目標、概念說明、範例或公式、重點整理。
3. 專有名詞第一次出現時，提供中文與英文名稱，例如「感知器（Perceptron）」。
4. 內容以初學者能理解為原則，先直覺再公式，最後才放程式。
5. 程式碼需使用 fenced code block，並附上用途說明。
6. 新文章必須加入首頁的知識卡片，且分類與標籤一致。

## 6. 命名與內容格式
- HTML 檔名：`kebab-case.html`。
- CSS class：`kebab-case`。
- JavaScript 變數與函式：`camelCase`。
- 圖片放在 `assets/`，檔名需描述用途。
- 連結使用相對路徑，避免寫死網域。
- 每個頁面需有 `<title>`、meta description、語意化標籤與可讀的替代文字。

## 7. AI 修改規則
- 修改前先閱讀本文件與相關檔案。
- 優先沿用既有元件與樣式，不任意重複建立。
- 不得刪除既有功能，除非使用者明確要求。
- 新增功能需同步更新 README。
- 不得引入未說明的外部套件或 CDN。
- 內容若有不確定的學術資訊，需標示待確認，不可編造。
- 完成後檢查連結、檔案路徑、Console 錯誤與手機版版面。

## 8. Git 與部署
- Commit 使用簡潔描述，例如 `feat: add perceptron lesson`、`fix: repair search filter`。
- GitHub Pages 使用 repository 的根目錄作為發布來源。
- 每次部署前確認首頁為 `index.html`，所有資源路徑可正常載入。

## 9. 完成標準（Definition of Done）
- 網頁可正常開啟且無明顯錯誤。
- 導覽、搜尋與卡片連結可使用。
- 手機與桌面版版面正常。
- 新內容符合本文件格式。
- README 與實際功能一致。
