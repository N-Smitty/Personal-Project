update users set (
first_name,
last_name,
email
) = (
    $1,
    $2,
    $3
) where user_id = $4
returning first_name, last_name, email, user_id;