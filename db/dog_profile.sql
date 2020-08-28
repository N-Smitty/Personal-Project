insert into dog_profile (
dog_name,
dog_age,
breed, 
heat_number,
user_id
) values (
$1,
$2,
$3,
$4,
$5
) returning dog_id;