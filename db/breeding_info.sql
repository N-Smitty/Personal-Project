insert into breeding_info (
dog_id,
insemination_type,
ng_ml,
date_taken,
time_taken
) values (
$1,
$2,
$3,
CURRENT_DATE,
CURRENT_TIMESTAMP
);