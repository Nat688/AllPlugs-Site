document.querySelectorAll('.produit').forEach(produit => {
    let prix = produit.dataset.prix;
    let nom = produit.dataset.nom;

    paypal.Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: prix },
                    description: nom
                }]
            });
        },
        onApprove: (data, actions) => {
            return actions.order.capture().then(() => {
                alert("Paiement réussi pour " + nom);
            });
        }
    }).render(produit.querySelector('.paypal-btn'));
});
