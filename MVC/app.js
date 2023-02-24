const express=require('express')
const app=express()
const mime=require('mime')
const xl=require('excel4node')
const router=express.Router()
const path=require('path')
app.use(express.json())
const cors=require("cors")
router.use(cors())
app.use(cors())
const headerColumns=['Name','BlogTitle','NumberofViews','NumberofLikes']

const data=[]
app.post('/excel',(req,res)=>{
    console.log(req.body)
    data[data.length]=req.body
    console.log(data)
})
console.log(data)

const createExcelFile=()=>{
    const wb=new xl.Workbook()
    const ws=wb.addWorksheet("sheet1") 
    let colIndex=1
    headerColumns.forEach((item)=>{
        ws.cell(1,colIndex++).string(item)
    })
    let rowIndex=2;
    data.forEach((item)=>{
        let columnIndex=1;
        Object.keys(item).forEach((colName)=>{
            ws.cell(rowIndex,columnIndex++).string(item[colName])
        })
        rowIndex++;
    })
    wb.write("sheet1.xlsx")
}

router.get('/sheet1',(req,res,next)=>{
    createExcelFile()
    const file=__dirname+"/sheet1.xlsx"
    const fileName=path.basename(file)
    const mimeType=mime.getType(file)
    res.setHeader("Content-Disposition","attachment;filename="+fileName)
    res.setHeader("Content-Type",mimeType)

    
        res.download(file)



})
app.use('/',router)

app.listen(3000)