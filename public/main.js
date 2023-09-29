const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/pages/markdown") // markdown directory to grab files from
let postlist = []

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list directory contents: " + err)
        }
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndicies = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetaData = ({lines, metadataIndicies}) => {
                    if (metadataIndicies.length > 0) {
                        let metadata = lines = lines.slice(metadataIndicies[0] + 1, metadataIndicies[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndicies}) => {
                    if (metadataIndicies.length > 0) {
                        lines = lines.slice(metadataIndicies[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndicies = lines.reduce(getMetadataIndicies, [])
                const metadata = parseMetaData({lines, metadataIndicies})
                const content = parseContent({lines, metadataIndicies})
                const date = new Date(metadata.date)
                const timestamp = date.getTime() / 1000
                post = { // Fallback data if no metadata is provided
                    id: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    slug: metadata.slug ? metadata.slug : path.parse(`${dirPath}/${file}`).name,
                    author: metadata.author ? metadata.author : "Anonymous",
                    card_img: metadata.card_img ? metadata.card_img : "/images/blog-cards/develop-hammer-image.png",
                    date: metadata.date ? metadata.date : "No date given",
                    content: content ? content : "Work in progress..."
                }
                postlist.push(post)
                if (i === files.length - 1){
                    const sortedList = postlist.sort((a,b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    let data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/posts.json", data)
                }
            })
        })
    })
    return
}

getPosts()