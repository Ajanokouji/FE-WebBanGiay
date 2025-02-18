using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DATNFEproject.Controllers
{
    public class VouncherController : Controller
    {
        // GET: VouncherController
        public ActionResult Index()
        {
            return View();
        }

        // GET: VouncherController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: VouncherController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: VouncherController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VouncherController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: VouncherController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: VouncherController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: VouncherController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
