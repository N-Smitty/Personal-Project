insert into dog_profile (
user_id,
dog_name,
dog_age,
breed, 
heat_number
) values (
$1,
$2,
$3,
$4,
$5
)
returning *;