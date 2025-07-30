document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#editInvForm")
  const updateBtn = document.querySelector("button.update-btn")

  if (!form || !updateBtn) return

  form.addEventListener("input", function () {
    updateBtn.removeAttribute("disabled")
  })
})

