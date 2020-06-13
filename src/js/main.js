
//githun repo fetch

$(document).ready(function () {

    var myDiv = $('.substr');
    myDiv.text(myDiv.text().substring(0, 200))

    $(".page-scroll").click(function () {
        var href = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(`${href}`).offset().top - 100
        }, 1000);
    });

    // const API = "https://api.github.com/users/TaoseefIshtiak/repos";

    // //console.log(API);

    // axios.get(API)
    // .then(function (response) {
    //     let res = response.data;


    //     res.forEach(repo => {
    //         if (repo.stargazers_count > 0) {
    //             let template = `
    //                 <div class="col-md-4">
    //                     <div class="card shadow-sm">
    //                         <div class="card-body ">
    //                             <h6 class="text-capitalize">${repo.name}</h6>
    //                             <p class="text-justify substr">
    //                                 ${repo.description.substring(0, 200)}...
    //                             </p>
    //                             <label class="mb-2"><strong>${repo.language}</strong></label> <br>
    //                             <a class="btn btn-sm btn-custom" href="${repo.html_url}" target="_blank">
    //                                 Repository &nbsp; 
    //                                 <i class="fas fa-arrow-right"></i> 
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             `
    //             $('#projectgrid').append(template);
    //             // console.log(repo.name);
    //         }
    //     });
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })



});


