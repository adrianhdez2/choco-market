export const UseImagePreviews = (event, setImagePreviews) => {
    const files = event.target.files;
    const previews = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
            previews.push(e.target.result);
            if (previews.length === files.length) {
                setImagePreviews(previews);
            }
        };

        reader.readAsDataURL(file);
    }
};
