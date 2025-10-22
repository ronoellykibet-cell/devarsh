
    let cart = [];

    function searchProducts() {
        const query = document.getElementById('search').value.toLowerCase();
        const items = document.querySelectorAll('.grid .item');

        items.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            item.style.display = productName.includes(query) ? 'block' : 'none';
        });
    }




    function addToCart(item) {
        alert(item + ' has been added to your cart!');
    }



    function placeOrder(item){
        alert(item + ' has been ordered on your cart!');
    }
        


    function openModal(imgSrc) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }

    function closeModal() {
        document.getElementById("imageModal").style.display = "none";
    }
