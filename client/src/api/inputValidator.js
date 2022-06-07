export default function inputValidator(ipInput) {
  const IP = ipInput.target.ip.value;

  // Check if IP input is empty
  if (IP.length === 0)
    return {
      isValid: false,
      error: "Enter any IP address!"
    }

  // Check if IP input containts IP-like string
  if (!IP.match(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/))
    return {
      isValid: false,
      error: "Enter a valid IP address!"
    }
  
  return { isValid: true }
}
