const axios = require('axios')

async function get(req, res) {

    try {
        const reposTake = await axios.get(`${process.env.BASE_URL}/orgs/takenet/repos?page=1&per_page=6&language=c%23&=
            ${process.env.CLIENT_ID}&=${process.env.CLIENT_SECRET}`)
        
        let reposTakeFiltered = []
        
        reposTake.data.map(repo => {
        
            //Foi necessário incluir esse tratamento para evitar retorno de repositórios com linguagem=null
            //a api do github está incluindo repositórios onde a linguagem está null no retorno
            //mesmo sendo informado o parâmetro da linguagem na requisição.           
            if(repo.language !== null) {
                reposTakeFiltered.push({
                    avatar: repo.owner.avatar_url,
                    title: repo.full_name,
                    subTitle: repo.description,
                    date: repo.created_at,
                    language: repo.language,
                })
            }
        })

        return res.send( Object.assign({},reposTakeFiltered) )
    } catch (error) {
        res.send({ 'error': error.message })
    }
    
}

module.exports = {get}