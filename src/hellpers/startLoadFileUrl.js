

export const startLoadFileUrl = async (file) => {

    const ClouUrl = 'https://api.cloudinary.com/v1_1/kevinmark/upload'

    const formData = new FormData();

    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);


    try {

        const resp = await fetch(ClouUrl, {
            method: 'POST',
            body: formData
        });


        if (resp.ok) {
            const clouResp = await resp.json();
            return clouResp.secure_url;
        } else {
            throw await resp.json()
        }



    } catch (error) {
        throw error
    }


};