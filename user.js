const BASE_URL = 'http://localhost:8000'
window.onload = async () => {
    await loadData()
}

const loadData = async () => {
    console.log('user page loaded')
    //1. load user ทั้งหมด จาก api ที่เตรียมไว้
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)

    const userDOM = document.getElementById('user')
    //2. นำ user ทั้งหมด โหลดกลับเข้าไปใน html

    let htmlData = '<div>'
    for (let i = 0; i < response.data.length; i++) {
        let user = response.data[i]
        htmlData += `<div>
        <table id="tablecustomers">
        <tr>
        <td>${user.id}</td> <td>${user.firstname}</td> <td>${user.lastname}</td>
        <td><a href='index.html?id=${user.id}'><button class = 'buttonEdit submitData'>Edit</button></a></td>
        <td><button class = 'delete buttonDelete submitData' data-id = '${user.id}'>Delete</button></td>
        </tr>
        </table>
        </div>`
    }
    htmlData += '</div>'
    userDOM.innerHTML = htmlData

    //3. ลบ user
    const deleteDOM = document.getElementsByClassName('delete')
    for (let i = 0; i < deleteDOM.length; i++) {
        deleteDOM[i].addEventListener('click', async (event) => {
            //ดึง id ของ user ที่ต้องการลบ
            const id = event.target.dataset.id
            try {
                await axios.delete(`${BASE_URL}/users/${id}`)
                loadData() //recursive function = เรียกใช้ฟังก์ชั่น ตัวเอง
            }catch (error) {
                console.log('error',error)
            }
        })
    }
}