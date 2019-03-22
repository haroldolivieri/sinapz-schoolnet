export function extractInitials(full_name) {
  return full_name.split(' ').map(name => name[0].toUpperCase()).join('')
}
