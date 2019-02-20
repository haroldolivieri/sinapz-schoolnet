export function extractInitials(full_name) {
  let initials = ''
  full_name.split(' ').map((name) => {
    initials += name[0].toUpperCase()
  });
  return initials
}
