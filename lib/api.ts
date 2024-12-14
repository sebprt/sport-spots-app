export async function fetchEquipements({filters}) {
    const response = await fetch('https://equipements.sports.gouv.fr/api/explore/v2.1/catalog/datasets/data-es/records?limit=20');

    return await response.json();
}